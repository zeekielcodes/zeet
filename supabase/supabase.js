// import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file

const supabaseUrl = "https://jusqwzsxrlwlbuqqzgyl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1c3F3enN4cmx3bGJ1cXF6Z3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzOTY3NDIsImV4cCI6MjAxMTk3Mjc0Mn0.-pE6pOTuskBLboLlonaKYKy4uDIEKsktEhhpw6K66sc";
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

// export const supabase = createClient(
//   "https://jusqwzsxrlwlbuqqzgyl.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1c3F3enN4cmx3bGJ1cXF6Z3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzOTY3NDIsImV4cCI6MjAxMTk3Mjc0Mn0.-pE6pOTuskBLboLlonaKYKy4uDIEKsktEhhpw6K66sc",
//   {
//     localStorage: AsyncStorage,
//   }
// );

// export const supabase = createClient(
//   "https://jusqwzsxrlwlbuqqzgyl.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1c3F3enN4cmx3bGJ1cXF6Z3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzOTY3NDIsImV4cCI6MjAxMTk3Mjc0Mn0.-pE6pOTuskBLboLlonaKYKy4uDIEKsktEhhpw6K66sc",
//   {
//     auth: {
//       persistSession: false,
//       autoRefreshToken: false,
//       detectSessionInUrl: false,
//     },
//   }
// );
