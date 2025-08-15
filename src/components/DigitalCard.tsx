import { Phone, MessageCircle, MapPin, Mail, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import mainBg from "@/assets/main-bg.png";
import cardBg from "@/assets/card-bg.png";
import logo from "@/assets/logo.png";

const DigitalCard = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const contactDetails = [
    { icon: Phone, label: "9745267855", action: () => window.open("tel:9745267855") },
    { icon: Phone, label: "9946494956", action: () => window.open("tel:9946494956") },
    { icon: Mail, label: "autozonekmtdy@gmail.com", action: () => window.open("mailto:autozonekmtdy@gmail.com") },
    { icon: MapPin, label: "KARMANTHODY, KARADUKKA, MULLERIA", action: () => window.open("https://maps.google.com/?q=KARMANTHODY+KARADUKKA+MULLERIA") },
  ];

  const handleCall = () => {
    window.open("tel:9745267855");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919745267855");
  };

  const handleDirection = () => {
    window.open("https://maps.google.com/?q=KARMANTHODY+KARADUKKA+MULLERIA");
  };

  const handleMail = () => {
    window.open("mailto:autozonekmtdy@gmail.com");
  };

  const handleShareWhatsApp = () => {
    if (phoneNumber) {
      const message = `Hi! I found AutoZone's contact details. Check out their services for wheel alignment & tyres in Karmanthody. Contact: 9745267855`;
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
      toast({
        title: "Shared successfully!",
        description: "Contact details shared via WhatsApp",
      });
    } else {
      toast({
        title: "Enter phone number",
        description: "Please enter a phone number to share via WhatsApp",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Contact information copied to clipboard",
    });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Main Card */}
      <div 
        className="relative w-full max-w-sm sm:max-w-sm rounded-2xl p-6 sm:p-8 shadow-card animate-float"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Card overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 rounded-2xl"></div>
        
        <div className="relative z-10 space-y-6">
          {/* Logo Section */}
          <div className="flex justify-center">
            <div className="bg-white p-3 rounded-xl border-4 border-white shadow-lg">
              <img 
                src={logo} 
                alt="AutoZone Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          {/* Business Info */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-white tracking-wider">
              AUTOZONE
            </h1>
            <p className="text-sm font-medium text-white/90 tracking-wide">
              WHEEL ALIGNMENT & TYRES
            </p>
            <p className="text-sm font-medium text-white/80">
              KARMANTHODY
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-3 gap-3">
            <Button
              onClick={handleCall}
              variant="outline"
              className="bg-transparent border-2 border-autozone-blue text-autozone-blue hover:bg-autozone-blue hover:text-white transition-all duration-300 shadow-button"
            >
              <Phone className="w-4 h-4 mr-1" />
              Call
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="bg-transparent border-2 border-autozone-blue text-autozone-blue hover:bg-autozone-blue hover:text-white transition-all duration-300 shadow-button"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
            <Button
              onClick={handleDirection}
              variant="outline"
              className="bg-transparent border-2 border-autozone-blue text-autozone-blue hover:bg-autozone-blue hover:text-white transition-all duration-300 shadow-button"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Direction
            </Button>
          </div>

          {/* Mail Button */}
          <Button
            onClick={handleMail}
            variant="outline"
            className="w-full bg-transparent border-2 border-autozone-blue text-autozone-blue hover:bg-autozone-blue hover:text-white transition-all duration-300 shadow-button"
          >
            <Mail className="w-4 h-4 mr-2" />
            Mail
          </Button>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
                onClick={detail.action}
              >
                <detail.icon className="w-5 h-5 text-autozone-blue flex-shrink-0" />
                <span className="text-white text-sm font-medium flex-1">
                  {detail.label}
                </span>
                <Copy 
                  className="w-4 h-4 text-white/60 hover:text-white cursor-pointer" 
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(detail.label);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Share Section */}
          <div className="space-y-3 pt-4 border-t border-white/20">
            <div className="flex space-x-2">
              <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                <span className="text-white text-sm font-medium">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-autozone-blue"
              />
            </div>
            <Button
              onClick={handleShareWhatsApp}
              className="w-full bg-autozone-success hover:bg-autozone-success/90 text-white font-medium py-3 shadow-button"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Share on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCard;