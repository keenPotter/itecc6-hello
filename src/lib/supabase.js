import { createClient } from '@supabase/supabase-js' 
const supabaseUrl = 'https://xfpmkrfnqxxtxhvtzwvg.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmcG1rcmZucXh4dHhodnR6d3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNjAyNzEsImV4cCI6MjA5MTgzNjI3MX0.14R5ifAP14h8bC_NokjTubhyrsFh3rOfwg7cLaoBAWU' 
export const supabase = createClient(supabaseUrl, supabaseKey)