CREATE TABLE IF NOT EXISTS public_leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    language VARCHAR(5) NOT NULL,
    service VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new',
    ip_address VARCHAR(45),
    user_agent TEXT
);

CREATE INDEX idx_public_leads_created_at ON public_leads(created_at DESC);
CREATE INDEX idx_public_leads_status ON public_leads(status);
CREATE INDEX idx_public_leads_language ON public_leads(language);

COMMENT ON TABLE public_leads IS 'Patient appointment requests from public website';
COMMENT ON COLUMN public_leads.status IS 'Lead status: new, contacted, scheduled, cancelled';