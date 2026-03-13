import { Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const ContactUS = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We're here to help. Reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <Card className="border-border">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+254 717 448 835</p>
              </div>
              <Button
                nativeButton={false}
                render={
                  <Link
                    href="tel:+254717448835"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Phone /> Call Us
                  </Link>
                }
                variant={"outline"}
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-border">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">support@cbcai.co.ke</p>
              </div>
              <Button
                nativeButton={false}
                variant="outline"
                className="w-full"
                render={
                  <Link
                    href="mailto:support@cbcai.co.ke"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Send />
                    Send Email
                  </Link>
                }
              ></Button>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="border-border">
            <CardContent className="p-6 flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Open Hours
                </h3>
                <p className="text-muted-foreground">Mon - Fri: 8AM - 6PM</p>
                <p className="text-muted-foreground">Sat: 9AM - 2PM</p>
              </div>
              <div className="w-full pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  EAT (Nairobi Time)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
