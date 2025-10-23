import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


export interface Participant {
  id: number
  name: string
  profile_icon: string
  profile_link: string
  points: number
  rank: number
  badges: number
  last_updated: string
  increments_decrements: number
  created_at: string
}

export async function fetchLeaderboard(): Promise<Participant[]> {
  const { data, error } = await supabase
    .from('gdg_cloud_skills_ranks')
    .select('*')
    .order('rank', { ascending: true })

  if (error) {
    console.error('Error fetching leaderboard:', error)
    throw error
  }

  return data || []
}

export async function searchParticipants(query: string): Promise<Participant[]> {
  const { data, error } = await supabase
    .from('gdg_cloud_skills_ranks')
    .select('*')
    .ilike('name', `%${query}%`)
    .order('rank', { ascending: true })

  if (error) {
    console.error('Error searching participants:', error)
    throw error
  }

  return data || []
}
