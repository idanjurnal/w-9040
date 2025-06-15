
-- Create function to verify admin login
CREATE OR REPLACE FUNCTION verify_admin_login(input_email TEXT, input_password TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM public.admin_users 
    WHERE email = input_email 
    AND password_hash = crypt(input_password, password_hash)
  );
END;
$$;
