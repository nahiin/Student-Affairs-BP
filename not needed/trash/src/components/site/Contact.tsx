import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const TITLES = [
  "Accountant","Advisor","Board Member","CEO/President/Chancellor","Chief Academic Officer/Provost",
  "Chief Data Officer","Chief Financial Officer","Chief Human Resources Officer",
  "Chief Information/Technology Officer/CISO","Comptroller","Dean","Developer/Programmer/Analyst",
  "Director","Faculty","Manager","Partner","Registrar","Student","Vice President","Other",
];

const FUNCTIONS = [
  "Administration","Admissions/Enrollment/Recruiting","Advancement/Alumni Relations",
  "Advising/Student Affairs","Finance","Financial Aid","Housing/Facilities","Human Resources",
  "IT","Legal","Other","School/Program",
];

const COUNTRIES = [
  "United States","Canada","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brasil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Cote D'Ivoire","Croatia","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatoral Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guatemala","Guernsey","Guinea","Guyana","Haiti","Heard and Mc Donald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Island","Poland","Portugal","Qatar","Republic of Malta","Reunion Island","Romania","Russia","Rwanda","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Suriname","Swaziland","Sweden","Switzerland","Taiwan","Tajikistan","Tanzania","Thailand","Tibet","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Vanuatu","Vatican City State (Holy See)","Venezuela","Vietnam","Virgin Islands, British","Wallis and Futuna Islands","Western Sahara","Yemen","Zambia","Zimbabwe",
];

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  institution: z.string().trim().min(1, "Required").max(200),
  title: z.string().min(1, "Required"),
  function: z.string().min(1, "Required"),
  country: z.string().min(1, "Required"),
  phone: z.string().trim().min(4, "Required").max(40),
  accessibility: z.string().trim().max(1000).optional().or(z.literal("")),
  dataSharing: z.enum(["Yes", "No"], { message: "Required" }),
  mediaConsent: z.enum(["Yes", "No"]).optional(),
});

export function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setState("loading");
    await new Promise((r) => setTimeout(r, 900));
    setState("done");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Registration"
          title="Reserve your seat"
          subtitle="Complete the form below and our team will confirm your registration."
        />

        <div className="mt-14">
          {/* Form full width */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-cream border border-border p-8 md:p-10"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="firstName" label="First Name" required error={errors.firstName} />
              <Field name="lastName" label="Last Name" required error={errors.lastName} />
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <Field name="email" type="email" label="Email" required error={errors.email} />
              <Field
                name="institution"
                label="Institution / Organisation"
                required
                error={errors.institution}
              />
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <SelectField name="title" label="Title" required options={TITLES} error={errors.title} />
              <SelectField
                name="function"
                label="Function"
                required
                options={FUNCTIONS}
                error={errors.function}
              />
            </div>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <SelectField
                name="country"
                label="Country"
                required
                options={COUNTRIES}
                error={errors.country}
              />
              <Field
                name="phone"
                type="tel"
                label="Phone Number"
                required
                error={errors.phone}
              />
            </div>

            <div className="mt-5">
              <Field
                name="accessibility"
                label="Accessibility requirements (optional)"
                textarea
                error={errors.accessibility}
              />
            </div>

            <RadioGroup
              name="dataSharing"
              required
              error={errors.dataSharing}
              label="I authorise my data to be shared with sponsors so I may receive news and offers of interest. You may unsubscribe at any time."
            />

            <RadioGroup
              name="mediaConsent"
              label="I consent to the use of photos and videos of me from the conference on PMU's social media platforms."
            />

            <button
              type="submit"
              disabled={state === "loading"}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-deep transition-colors disabled:opacity-70"
            >
              {state === "loading" && <Loader2 size={16} className="animate-spin" />}
              {state === "done" && <CheckCircle2 size={16} className="text-gold" />}
              {state === "loading"
                ? "Submitting…"
                : state === "done"
                ? "Registration received — thank you!"
                : "Submit"}
            </button>
          </form>

          {/* Info cards below */}
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <InfoCard icon={MapPin} label="Address">
              PMU P.O. Box 1664<br />
              Al Khobar 31952<br />
              Kingdom of Saudi Arabia
            </InfoCard>
            <InfoCard icon={Phone} label="Call Us">
              <a href="tel:+96613896888" className="hover:text-gold transition-colors">
                +966 013 896 8888
              </a>
            </InfoCard>
            <InfoCard icon={Mail} label="Email Us">
              <a href="mailto:studentaffairs@pmu.edu.sa" className="hover:text-gold transition-colors">
                studentaffairs@pmu.edu.sa
              </a>
            </InfoCard>
          </div>
        </div>

      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-center rounded-xl bg-cream border border-border px-5 py-4">
      <div className="h-10 w-10 rounded-full bg-navy grid place-items-center shrink-0">
        <Icon size={16} className="text-gold" />

      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-gold font-semibold">{label}</div>
        <div className="mt-1 text-navy/80 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="text-xs uppercase tracking-widest text-navy/60 font-semibold">
      {children} {required && <span className="text-destructive">*</span>}
    </span>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  error,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  error?: string;
  required?: boolean;
}) {
  const common =
    "w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all mt-1.5";
  const border = error ? "border-destructive" : "border-border";
  return (
    <label className="block">
      <Label required={required}>{label}</Label>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          maxLength={1000}
          className={`${common} ${border} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          maxLength={type === "email" ? 255 : 200}
          className={`${common} ${border}`}
        />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function SelectField({
  name,
  label,
  options,
  error,
  required,
}: {
  name: string;
  label: string;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  const border = error ? "border-destructive" : "border-border";
  return (
    <label className="block">
      <Label required={required}>{label}</Label>
      <select
        name={name}
        defaultValue=""
        className={`w-full rounded-lg border ${border} bg-white px-4 py-3 text-sm text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all mt-1.5`}
      >
        <option value="" disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function RadioGroup({
  name,
  label,
  required,
  error,
}: {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <fieldset className="mt-6">
      <legend className="text-sm text-navy/80 leading-relaxed">
        {label} {required && <span className="text-destructive">*</span>}
      </legend>
      <div className="mt-3 flex gap-6">
        {["Yes", "No"].map((v) => (
          <label key={v} className="inline-flex items-center gap-2 text-sm text-navy">
            <input
              type="radio"
              name={name}
              value={v}
              className="h-4 w-4 accent-gold"
            />
            {v}
          </label>
        ))}
      </div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </fieldset>
  );
}
