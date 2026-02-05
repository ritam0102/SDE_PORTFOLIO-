BEGIN;

CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    name TEXT NOT NULL,
    phone TEXT,
    address TEXT NOT NULL,
    message TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public contact form)
CREATE POLICY "Allow public to insert contacts" ON public.contacts
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow only authenticated users to view (optional, but good practice)
CREATE POLICY "Allow authenticated users to view contacts" ON public.contacts
    FOR SELECT
    USING (auth.role() = 'authenticated');

COMMIT;
