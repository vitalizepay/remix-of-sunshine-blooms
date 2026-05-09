import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone, MessageSquare, MapPin, Mail, Star, Sparkles, ShieldCheck, Heart,
  GraduationCap, Baby, Sun, BookOpen, Users, Activity, Lightbulb, Smile,
  Music, Palette, Dumbbell, Brain, Zap, Award, ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { FloatingShapes, BlobBackdrop } from "@/components/site/Decorations";
import logo from "@/assets/logo.png";
import schoolFront from "@/assets/school-front.jpg";
import playSlide from "@/assets/play-slide.jpg";
import classroom1 from "@/assets/classroom-1.jpg";
import classroom2 from "@/assets/classroom-2.jpg";
import classroom3 from "@/assets/classroom-3.jpg";
import playCars from "@/assets/play-cars.jpg";
 
const PHONE_1 = "7373256444";
const PHONE_2 = "7871715444";
const EMAIL = "Sunshinepreschool26@gmail.com";
const INSTA = "https://www.instagram.com/sunshinepreschool26?utm_source=qr&igsh=MWlvNGN6YXZ6cWtmdQ==";
const WHATSAPP = `https://wa.me/91${PHONE_1}?text=Hi%20Sunshine%20Pre%20School%2C%20I%27d%20like%20to%20enquire%20about%20admissions`;
const MAPS = "https://maps.app.goo.gl/vmUQQEntJKRps96o6";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

function SectionHeading({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {kicker && (
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 font-fun text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
          {kicker}
        </span>
      )}
      <h2 className="mt-4 font-display text-4xl font-extrabold text-balance md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground md:text-lg">{sub}</p>}
    </motion.div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28">
      <FloatingShapes />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="relative z-10">
          <motion.span
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-fun text-sm font-semibold text-primary shadow-soft backdrop-blur"
          >
            <Sparkles className="h-4 w-4" /> Admissions Open 2026 – 2027
          </motion.span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-foreground md:text-7xl">
            Little Steps,{" "}
            <span className="text-blue-grad">Big Dreams!</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
            A joyful, safe and inspiring place where curious little minds learn, play and grow into confident shining stars. ✨
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#admissions" className="group inline-flex items-center gap-2 rounded-full bg-blue-grad px-7 py-3.5 font-fun font-semibold text-primary-foreground shadow-pop transition hover:scale-105">
              Enroll Today <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href={`tel:${PHONE_1}`} className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-fun font-semibold text-primary shadow-soft transition hover:scale-105">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 font-fun font-semibold text-white shadow-soft transition hover:scale-105">
              <MessageSquare className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Award, label: "Limited Seats", color: "bg-accent/10 text-accent" },
              { icon: ShieldCheck, label: "Trusted Preschool", color: "bg-primary/10 text-primary" },
              { icon: Heart, label: "Safe Environment", color: "bg-pink-100 text-pink-600" },
            ].map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className={`inline-flex items-center gap-2 rounded-full ${b.color} px-4 py-2 font-fun text-sm font-semibold`}
              >
                <b.icon className="h-4 w-4" /> {b.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-sunshine opacity-30 blur-2xl" />
            <motion.img
              src={logo} alt="Sunshine Pre School & Academy logo"
              className="relative mx-auto w-full max-w-lg drop-shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- PROGRAMS ---------- */
const programs = [
  { name: "Day Care", icon: Sun, desc: "Loving, safe full-day care for your little one.", color: "from-yellow-200 to-orange-200", iconBg: "bg-orange-400" },
  { name: "After School Care", icon: BookOpen, desc: "Homework help & playful learning after school.", color: "from-sky-200 to-blue-200", iconBg: "bg-sky-500" },
  { name: "Play Group", icon: Baby, desc: "First steps into social play and discovery.", color: "from-pink-200 to-rose-200", iconBg: "bg-pink-500" },
  { name: "Pre KG", icon: Sparkles, desc: "Foundational skills through joyful activities.", color: "from-purple-200 to-fuchsia-200", iconBg: "bg-fuchsia-500" },
  { name: "LKG", icon: GraduationCap, desc: "Reading, writing & numbers — made fun.", color: "from-emerald-200 to-teal-200", iconBg: "bg-emerald-500" },
  { name: "UKG", icon: Award, desc: "Confident readiness for big-school adventures.", color: "from-indigo-200 to-blue-200", iconBg: "bg-indigo-500" },
];

function Programs() {
  return (
    <section id="programs" className="relative py-20 md:py-28">
      <BlobBackdrop />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading kicker="Our Programs" title="Programs & Facilities" sub="Age-perfect programs designed to nurture every stage of your child's early journey." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.color} p-7 shadow-soft transition`}
            >
              <div className={`mb-5 grid h-16 w-16 place-items-center rounded-2xl ${p.iconBg} text-white shadow-pop transition group-hover:scale-110 group-hover:rotate-6`}>
                <p.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white/40 transition group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY ---------- */
const whys = [
  { icon: Users, t: "Social & Emotional Skills", d: "Confidence, empathy, sharing and lasting friendships." },
  { icon: Lightbulb, t: "Foundation for Learning", d: "Curiosity-led curriculum that sparks a love for learning." },
  { icon: Activity, t: "Physical Development", d: "Movement, coordination and healthy daily habits." },
  { icon: Brain, t: "Promoting Independence", d: "Children learn to choose, decide and grow responsibly." },
  { icon: Heart, t: "Life Skill Learning", d: "Communication, teamwork and self-care for life." },
];

function WhyUs() {
  return (
    <section className="relative bg-sky-grad py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading kicker="Why Choose Us" title="A Place Where Children Truly Shine" sub="Five powerful pillars guiding every smile, every lesson, every moment." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whys.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group rounded-3xl bg-white p-7 shadow-soft transition hover:shadow-pop"
            >
              <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl bg-blue-grad text-white shadow-soft transition group-hover:rotate-12">
                <w.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ACTIVITIES ---------- */
const activities = [
  { name: "Tuition", emoji: "📖", color: "bg-rose-100 text-rose-700" },
  { name: "Chess", emoji: "♟️", color: "bg-amber-100 text-amber-700" },
  { name: "Drawing", emoji: "🎨", color: "bg-sky-100 text-sky-700" },
  { name: "Musical Instruments", emoji: "🎹", color: "bg-violet-100 text-violet-700" },
  { name: "Western Dance", emoji: "💃", color: "bg-pink-100 text-pink-700" },
  { name: "Yoga", emoji: "🧘", color: "bg-emerald-100 text-emerald-700" },
  { name: "Art & Craft", emoji: "✂️", color: "bg-orange-100 text-orange-700" },
  { name: "Fitness", emoji: "🤸", color: "bg-lime-100 text-lime-700" },
  { name: "Karate", emoji: "🥋", color: "bg-red-100 text-red-700" },
];

function Activities() {
  return (
    <section id="activities" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading kicker="Beyond the Classroom" title="Extra-Curricular Activities" sub="A bouquet of fun, skill-building activities for every little talent." />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {activities.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: -1 }}
              className={`flex items-center gap-5 rounded-3xl ${a.color} p-6 shadow-soft transition hover:shadow-pop`}
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-4xl shadow-soft">
                {a.emoji}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">{a.name}</h3>
                <p className="font-fun text-sm opacity-80">Discover & shine</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-sunshine opacity-30 blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            <img src={classroom1} alt="Classroom" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-pop" />
            <img src={playSlide} alt="Play area" className="mt-10 aspect-[4/5] w-full rounded-3xl object-cover shadow-pop" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 font-fun text-xs font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
            Where Every Child <span className="text-blue-grad">Shines Bright</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Sunshine Pre School & Academy is dedicated to nurturing young minds through joyful learning,
            creativity, and holistic development. We provide a safe, caring, and inspiring environment
            where every child shines.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Sparkles, t: "Our Vision", d: "To shape confident, creative, lifelong learners." },
              { icon: Heart, t: "Our Mission", d: "Joyful, holistic learning for every child." },
              { icon: Smile, t: "Child-Centered", d: "Programs built around little hearts and minds." },
              { icon: ShieldCheck, t: "Safe & Secure", d: "Caring spaces, trained teachers, full safety." },
            ].map((b) => (
              <div key={b.t} className="flex gap-3 rounded-2xl border border-border/60 bg-muted/40 p-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-grad text-white">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold">{b.t}</h4>
                  <p className="text-sm text-muted-foreground">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- PREMIUM PHOTO ---------- */
function PremiumPhoto() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] shadow-pop"
        >
          <div className="absolute -inset-2 -z-10 rounded-[3rem] bg-sunshine opacity-50 blur-2xl" />
          <img src={schoolFront} alt="Sunshine Pre School entrance" className="h-[300px] w-full object-cover md:h-[520px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <motion.span
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              className="inline-block rounded-full bg-secondary px-4 py-1.5 font-fun text-xs font-bold uppercase tracking-wider"
            >
              Welcome to our Campus
            </motion.span>
            <h3 className="mt-3 font-display text-3xl font-extrabold text-white md:text-5xl">
              Step Into a World of Wonder ✨
            </h3>
            <p className="mt-2 max-w-2xl text-white/90 md:text-lg">A bright, safe and joy-filled space designed for happy little learners.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
const gallery = [
  { src: classroom1, alt: "Classroom learning", h: "h-64" },
  { src: playSlide, alt: "Play area slide", h: "h-80" },
  { src: classroom2, alt: "Activity room", h: "h-72" },
  { src: classroom3, alt: "Spacious hall", h: "h-80" },
  { src: playCars, alt: "Outdoor play", h: "h-64" },
  { src: schoolFront, alt: "Campus front", h: "h-72" },
];

function Gallery() {
  return (
    <section id="gallery" className="relative bg-sky-grad py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading kicker="Our Gallery" title="Moments of Joy & Learning" sub="Peek into the colourful world of our happy little stars." />
        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group break-inside-avoid overflow-hidden rounded-3xl shadow-soft"
            >
              <img src={g.src} alt={g.alt} className={`w-full ${g.h} object-cover transition duration-700 group-hover:scale-110`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const reviews = [
  { name: "Priya R.", role: "Parent of Aarav", text: "Sunshine has transformed my son! He runs to school every morning with a smile. The teachers are amazing.", avatar: "👩🏽" },
  { name: "Karthik S.", role: "Parent of Diya", text: "The safest, warmest preschool in the area. My daughter has grown so much in confidence and creativity.", avatar: "👨🏽" },
  { name: "Meena V.", role: "Parent of Tara", text: "Beautiful environment, caring teachers and meaningful activities. Highly recommended for every parent!", avatar: "👩🏻" },
  { name: "Ravi K.", role: "Parent of Aditi", text: "We love the holistic approach. Yoga, art, dance — my child enjoys every single day at Sunshine.", avatar: "🧔🏽" },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading kicker="Happy Parents" title="Loved by Families" sub="Real words from real Sunshine families." />
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-[320px] shrink-0 rounded-3xl bg-white p-6 shadow-soft md:w-[380px]">
                <div className="flex text-yellow-500">{[...Array(5)].map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-3 text-foreground/80">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-2xl">{r.avatar}</div>
                  <div>
                    <div className="font-display font-bold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ADMISSIONS ----------
 * Enquiry form delivers submissions straight to EMAIL (above) using
 * FormSubmit.co — a free, no-signup service that works perfectly on
 * GitHub Pages (purely static). To change the recipient, just edit the
 * EMAIL constant near the top of this file. The FIRST submission to a new
 * email triggers a one-time confirmation link sent by FormSubmit — click
 * it once and all future enquiries land directly in your inbox.
 */
function Admissions() {
  const [form, setForm] = useState({ student: "", parent: "", age: "", program: "Play Group", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Admission Enquiry — ${form.student || "New Student"} (${form.program})`,
          _template: "table",
          _captcha: "false",
          "Student Name": form.student,
          "Parent Name": form.parent,
          "Child's Age": form.age,
          Program: form.program,
          Phone: form.phone,
          Message: form.message || "(none)",
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("sent");
      setForm({ student: "", parent: "", age: "", program: "Play Group", phone: "", message: "" });
    } catch {
      // Fallback: open user's email client
      const subject = encodeURIComponent(`Admission Enquiry — ${form.student || "New Student"} (${form.program})`);
      const body = encodeURIComponent(
        `Student Name: ${form.student}\nParent Name: ${form.parent}\nChild's Age: ${form.age}\nProgram: ${form.program}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus("error");
    }
  };

  return (
    <section id="admissions" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-blue-grad" />
      <FloatingShapes />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 font-fun text-xs font-bold uppercase tracking-wider">
            Admissions 2026 – 2027
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Enroll Today — <br /> <span className="text-secondary">Limited Seats!</span>
          </h2>
          <p className="mt-4 max-w-md text-white/90 md:text-lg">
            Give your child the brightest start. Reserve a seat in our limited admissions for the 2026–2027 academic year.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a href={`tel:${PHONE_1}`} className="flex items-center gap-3 rounded-2xl bg-white/15 p-4 text-white backdrop-blur transition hover:bg-white/25">
              <Phone className="h-5 w-5" /> <span className="font-fun font-semibold">{PHONE_1}</span>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-[#25D366] p-4 text-white transition hover:scale-[1.02]">
              <MessageSquare className="h-5 w-5" /> <span className="font-fun font-semibold">WhatsApp Inquiry</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-[2rem] bg-white p-6 shadow-pop md:p-8"
        >
          <h3 className="font-display text-2xl font-bold">Enquiry Form</h3>
          <p className="text-sm text-muted-foreground">Submitting will open your email app to send us your enquiry.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Input label="Student Name" value={form.student} onChange={(v)=>setForm({...form,student:v})} required />
            <Input label="Parent Name" value={form.parent} onChange={(v)=>setForm({...form,parent:v})} required />
            <Input label="Child's Age" value={form.age} onChange={(v)=>setForm({...form,age:v})} required />
            <div>
              <label className="mb-1 block font-fun text-sm font-medium">Program</label>
              <select
                value={form.program}
                onChange={(e)=>setForm({...form,program:e.target.value})}
                className="w-full rounded-2xl border border-border bg-muted/40 px-4 py-3 font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {["Day Care","After School Care","Play Group","Pre KG","LKG","UKG"].map(p=>(<option key={p}>{p}</option>))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <Input label="Phone Number" value={form.phone} onChange={(v)=>setForm({...form,phone:v})} required type="tel" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block font-fun text-sm font-medium">Message</label>
              <textarea
                rows={3} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}
                className="w-full rounded-2xl border border-border bg-muted/40 px-4 py-3 font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full rounded-2xl bg-blue-grad py-3.5 font-fun font-bold text-white shadow-soft transition hover:scale-[1.02]">
            {sent ? "Sent! ✓" : "Submit Enquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Input({ label, value, onChange, required, type="text" }: { label: string; value: string; onChange: (v:string)=>void; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="mb-1 block font-fun text-sm font-medium">{label}</label>
      <input
        type={type} value={value} onChange={(e)=>onChange(e.target.value)} required={required}
        maxLength={120}
        className="w-full rounded-2xl border border-border bg-muted/40 px-4 py-3 font-body text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const cards = [
    { icon: Phone, title: "Call Us", lines: [PHONE_1, PHONE_2], href: `tel:${PHONE_1}` },
    { icon: Mail, title: "Email", lines: [EMAIL], href: `mailto:${EMAIL}` },
    { icon: MapPin, title: "Address", lines: ["No.5/3, Kumaran Nagar,", "Vilankurichi Road, Coimbatore – 641 035"], href: MAPS },
  ];
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading kicker="Get in Touch" title="We'd Love to Hear From You" sub="Visit, call or message — we're always happy to welcome new families." />
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.a
              key={c.title} href={c.href} target={c.title==="Address"?"_blank":undefined} rel="noopener"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i*0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl bg-white p-7 shadow-soft transition hover:shadow-pop"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-blue-grad text-white shadow-soft transition group-hover:rotate-12">
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-3xl shadow-pop"
        >
          <iframe
            title="Sunshine Pre School Location"
            src="https://www.google.com/maps?q=Kumaran+Nagar+Vilankurichi+Road+Coimbatore&output=embed"
            className="h-[400px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1740] text-white">
      <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.7 0.2 260) 0, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.7 0.2 25) 0, transparent 40%)" }} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div>
          <img src={logo} alt="Sunshine" className="h-16 w-auto" />
          <p className="mt-4 text-sm text-white/70">Nurturing Young Minds, Shaping Bright Futures!</p>
          <a href={INSTA} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-fun font-semibold"
             style={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            Follow on Instagram
          </a>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {["Home","About Us","Programs","Activities","Gallery","Admissions"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().split(" ")[0]}`} className="hover:text-secondary">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Programs</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {programs.map(p => <li key={p.name}>{p.name}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> {PHONE_1}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /> {PHONE_2}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /> {EMAIL}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Vilankurichi Road, Coimbatore</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Sunshine Pre School & Academy. Made with <Heart className="inline h-3 w-3 fill-pink-400 text-pink-400" /> for little dreamers.
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */
export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <WhyUs />
        <Activities />
        <About />
        <PremiumPhoto />
        <Gallery />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
