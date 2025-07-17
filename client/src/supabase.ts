// src/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aakuaknvqglquidtrwbu.supabase.co' // <-- Use this format!
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFha3Vha252cWdscXVpZHRyd2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNDE1NzUsImV4cCI6MjA2NzYxNzU3NX0.CJcUnDIh7RHoKJU-3vlrO9PLK3Q-YN_SOKJliAmLJpU' // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
