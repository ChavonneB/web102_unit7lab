import { createClient } from '@supabase/supabase-js'
const URL = 'https://csgltkcmgwglqdewddkm.supabase.co'

export const supabase=createClient(URL, API_KEY)

