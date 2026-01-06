import { useState } from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

const BACKEND_URL = 'https://functions.poehali.dev/ec0853b1-d396-469c-a41e-1dfd8e11636f';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang: Language;
}

export default function BookingModal({ open, onOpenChange, lang }: BookingModalProps) {
  const t = getTranslation(lang);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          language: lang,
          service: formData.service,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: t.booking.success,
          description: t.booking.subtitle,
        });
        setFormData({ name: '', phone: '', service: '', message: '' });
        onOpenChange(false);
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to submit',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.booking.title}</DialogTitle>
          <p className="text-muted-foreground">{t.booking.subtitle}</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">{t.booking.name}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">{t.booking.phone}</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="service">{t.booking.service}</Label>
            <Input
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="message">{t.booking.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? '...' : t.booking.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}