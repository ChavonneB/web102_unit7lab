import { createClient } from '@supabase/supabase-js'
const URL = 'https://csgltkcmgwglqdewddkm.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzZ2x0a2NtZ3dnbHFkZXdkZGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MjQ2NzYsImV4cCI6MjA2OTQwMDY3Nn0.GMnxb1Y_R4OEYiWTILsGcccgypQOo-D3y4CvrwvCPYU'

export const supabase=createClient(URL, API_KEY)

