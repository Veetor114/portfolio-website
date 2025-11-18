import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Linkedin, Github, Download, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const name = `${firstName} ${lastName}`.trim();

    if (!name || !email || !message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/q6ttcnp4pb0zi5cox0i2h6um457882v3"; // <-- Replace with your Make webhook

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        }),
      });

      if (response.ok) {
        setSubmitStatus("Message sent successfully! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        console.error('Webhook error:', errorData);
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = async () => {
    const CV_URL = "https://eu.docworkspace.com/d/sIBnstND1AdL-9sYG?sa=601.1037";

    try {
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = CV_URL;
      link.download = 'Victor_Ikpebagha_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Direct download failed:', error);
      window.open(CV_URL, '_blank');
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ikpebaghaveetor@gmail.com", href: "mailto:ikpebaghaveetor@gmail.com" },
    { icon: Phone, label: "Phone", value: "+2348102461703", href: "tel:+2348102461703" },
    { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: null }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/victor-ikpebagha-21309926b/" },
    { icon: Github, label: "GitHub", href: "https://github.com/Veetor114" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-gray-900 dark:text-gray-100">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border-0 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Project Collaboration" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  {submitStatus && (
                    <div className={`p-4 rounded-lg text-sm ${
                      submitStatus.includes('successfully') 
                        ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
                        : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                    }`}>
                      {submitStatus}
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="shadow-lg border-0 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                        <div className="text-gray-900 dark:text-gray-100">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">Connect & Download</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className="flex-1 border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20"
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <IconComponent className="w-5 h-5 mr-2" />
                        {social.label}
                      </Button>
                    );
                  })}
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleDownloadCV}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="mb-2 text-gray-900 dark:text-gray-100">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                feel free to reach out via LinkedIn or Email for a faster response.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
