import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6">
            START YOUR
            <span className="block text-primary">PROJECT TODAY</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Get in touch with our expert team 
            for a free consultation and personalized project quote.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Why Choose Mabel Construction?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}