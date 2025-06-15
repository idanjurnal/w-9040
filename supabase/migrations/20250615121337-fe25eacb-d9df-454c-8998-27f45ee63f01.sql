
-- Create admin_users table to store admin credentials
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy that allows reading admin users (for login verification)
CREATE POLICY "Allow reading admin users for authentication" 
  ON public.admin_users 
  FOR SELECT 
  USING (true);

-- Insert your admin credentials (password will be hashed)
INSERT INTO public.admin_users (email, password_hash) 
VALUES ('muhammadifdan770@gmail.com', crypt('takiyaidan123', gen_salt('bf')));
