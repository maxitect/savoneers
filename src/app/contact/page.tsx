"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Title from "@/components/Title";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Title title="Contact" showSearch={false} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white border border-black shadow-md p-8">
          <form>
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-black text-white border border-black rounded-none hover:bg-white hover:text-black transition-colors"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
