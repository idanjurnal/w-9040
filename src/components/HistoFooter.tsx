
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import emailjs from 'emailjs-com';

const HistoFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Newsletter Subscriber",
        from_email: email,
        message: `New newsletter subscription from Histo Project website.`,
        to_name: 'Histo Project Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-stone-900 text-cream-100 pt-16 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-stone-700">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif italic text-cream-100 mb-6">
              Histo Project
            </h3>
            <p className="text-stone-300 mb-6 leading-relaxed font-light">
              Preserving love stories with honest, cinematic, and natural documentation. 
              We are not just a service — we are a space to preserve memories that will last a lifetime.
            </p>
            <div className="space-y-3 text-stone-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-stone-400" />
                <span className="font-light">Bandung, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-stone-400" />
                <span className="font-light">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-stone-400" />
                <span className="font-light">hello@histoproject.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-cream-100">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-stone-300 hover:text-cream-100 transition-colors font-light">Engagement Photography</span></li>
              <li><span className="text-stone-300 hover:text-cream-100 transition-colors font-light">Prewedding Sessions</span></li>
              <li><span className="text-stone-300 hover:text-cream-100 transition-colors font-light">Traditional Wedding</span></li>
              <li><span className="text-stone-300 hover:text-cream-100 transition-colors font-light">Wedding Day Documentation</span></li>
              <li><span className="text-stone-300 hover:text-cream-100 transition-colors font-light">Complete Bundle Packages</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6 text-cream-100">Stay Connected</h4>
            <p className="text-stone-300 mb-4 font-light">
              Subscribe to get updates on our latest work and special offers.
            </p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-600 text-cream-100 placeholder-stone-400 font-light"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-3 bg-stone-700 text-cream-100 rounded-sm hover:bg-stone-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/histoproject" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 transition-colors hover:bg-stone-700 hover:text-cream-100"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:hello@histoproject.com" 
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 transition-colors hover:bg-stone-700 hover:text-cream-100"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm mb-4 md:mb-0 font-light">
            © {new Date().getFullYear()} Histo Project. All rights reserved.
          </p>
          <p className="text-stone-400 text-sm font-light">
            Preserving memories, one story at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HistoFooter;
