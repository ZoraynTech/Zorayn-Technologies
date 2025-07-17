import { supabase } from "../supabase";

export async function fetchTeamMembers() {
  const { data, error } = await supabase
    .from('team_members')
    .select('*');

  if (error) {
    console.error('Fetch error:', error.message);
    return [];
  }

  return Array.isArray(data) ? data : [];
}

// Utility to merge class names (like clsx)
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export async function submitContactForm(data) {
  const mappedData = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    service: data.service,
    message: data.message,
  };
  const { error } = await supabase
    .from("contact_submissions")
    .insert([mappedData]);
  return error;
}

export function subscribeToContactSubmissions(callback) {
  return supabase
    .channel('public:contact_submissions')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'contact_submissions' }, payload => {
      callback(payload.new);
    })
    .subscribe();
}