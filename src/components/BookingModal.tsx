import { useState } from 'react';
import { Language, getTranslation } from '@/lib/i18n';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lang: Language;
}

export default function BookingModal({ open, onOpenChange, lang }: BookingModalProps) {
  const t = getTranslation(lang);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: t.booking.success,
      description: t.booking.subtitle,
    });

    setFormData({ name: '', phone: '', service: '', message: '' });
    onOpenChange(false);
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

          <Button type="submit" className="w-full">
            {t.booking.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
