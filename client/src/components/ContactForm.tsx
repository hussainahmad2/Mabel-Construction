import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    // //todo: remove mock functionality - implement real form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-10 h-10 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
        <p className="text-muted-foreground">
          We've received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Get In Touch</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
          Ready to start your construction project? Contact us today for a free consultation 
          and let's discuss how we can bring your vision to life.
        </p>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">Phone</p>
              <p className="text-muted-foreground text-sm sm:text-base">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">Email</p>
              <p className="text-muted-foreground text-sm sm:text-base break-all">info@mabelconstruction.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">Office</p>
              <p className="text-muted-foreground text-sm sm:text-base">123 Construction Ave<br />Building City, BC 12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">First Name*</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 text-base" data-testid="input-first-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Last Name*</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-12 text-base" data-testid="input-last-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Email*</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} className="h-12 text-base" data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Phone*</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} className="h-12 text-base" data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Project Type*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base" data-testid="select-project-type">
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="commercial">Commercial Construction</SelectItem>
                      <SelectItem value="renovation">Renovation/Remodeling</SelectItem>
                      <SelectItem value="repair">Repair & Maintenance</SelectItem>
                      <SelectItem value="consultation">Consultation Only</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Message*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="min-h-[120px] text-base"
                      {...field} 
                      data-testid="textarea-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              size="lg" 
              className="w-full font-semibold hover-elevate active-elevate-2 h-12 sm:h-14 text-base sm:text-lg min-h-[48px]"
              disabled={isSubmitting}
              data-testid="button-submit-contact"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}