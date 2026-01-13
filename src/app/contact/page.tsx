import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const ContactPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="pt-24 pb-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
                                Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">Touch</span>
                            </h1>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                                Have questions about our labs, research, or how you can get involved? We'd love to hear from you.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-5">
                                    <div className="p-4 bg-violet-50 text-violet-600 rounded-2xl shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Email Us</h4>
                                        <p className="text-slate-500">hello@empowerwomen.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-5">
                                    <div className="p-4 bg-pink-50 text-pink-600 rounded-2xl shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Visit Our Hub</h4>
                                        <p className="text-slate-500">123 Empowerment Way, <br />San Francisco, CA 94103</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-5">
                                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                                        <p className="text-slate-500">+1 (555) 000-1111</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-slate-200">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
                                            <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-slate-900" placeholder="Jane Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email Address</label>
                                            <input type="email" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-slate-900" placeholder="jane@example.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1">Subject</label>
                                        <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/20 text-slate-900" placeholder="Research Inquiry" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase ml-1">Your Message</label>
                                        <textarea rows={5} className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/20 resize-none text-slate-900" placeholder="Tell us how we can help..."></textarea>
                                    </div>

                                    <Button className="w-full justify-center space-x-3 py-5 text-lg">
                                        <span>Send Message</span>
                                        <Send size={20} />
                                    </Button>
                                </form>
                            </div>

                            {/* Abstract element */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse" />
                            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-violet-600/10 rounded-full blur-xl animate-pulse" />
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 rounded-l-[10rem]" />
            </section>
        </div>
    );
};

export default ContactPage;
