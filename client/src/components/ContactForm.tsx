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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Ready to start your construction project? Contact us today for a free consultation 
          and let's discuss how we can bring your vision to life.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-muted-foreground">info@mabelconstruction.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Office</p>
              <p className="text-muted-foreground">123 Construction Ave<br />Building City, BC 12345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name*</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-first-name" />
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
                    <FormLabel>Last Name*</FormLabel>
                    <FormControl>
                      <Input {...field} data-testid="input-last-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} data-testid="input-email" />
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
                    <FormLabel>Phone*</FormLabel>
                    <FormControl>
                      <Input type="tel" {...field} data-testid="input-phone" />
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
                  <FormLabel>Project Type*</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-project-type">
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
                  <FormLabel>Message*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="min-h-[120px]"
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
              className="w-full font-semibold hover-elevate active-elevate-2"
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
                  <Send className="w-5 h-5 mr-2" />
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