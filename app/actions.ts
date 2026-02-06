'use server'

import { Resend } from 'resend'
import { type TablesInsert } from '@/database.types';

export async function sendContactEmail(formData: TablesInsert<'contacts'>) {
    const { name, phone, address, message } = formData

    // Lazy initialize Resend to avoid crashing if API key is missing on load
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY is missing. Email notification skipped.');
        return { success: false, error: 'Email service not configured' };
    }

    const resend = new Resend(apiKey);

    try {
        // 1. Send Email via Resend
        const { data, error: emailError } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // You can change this after verifying a domain
            to: ['ritamsamanta0@gmail.com'],
            subject: `New Contact Form Message from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        })

        if (emailError) {
            console.error('Email error:', emailError)
            return { success: false, error: 'Failed to send email' }
        }

        return { success: true }
    } catch (error) {
        console.error('Action error:', error)
        return { success: false, error: 'Internal server error' }
    }
}
