# VAANAM Solar Solutions

Next.js App Router application with TypeScript and plain CSS. The original landing page design, English/Tamil content, responsive styles, and WhatsApp enquiry flow are preserved.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run lint`, `npx tsc --noEmit`, and `npm run build` to validate changes.

## Architecture

```text
app/
  layout.tsx                  Root document, metadata, global styles
  globals.css                 Existing responsive design and tokens
  (marketing)/
    layout.tsx                Shared header, footer, contact actions, language provider
    page.tsx                  Home route: composes the landing page sections
components/
  layout/                     Site header, footer, fixed contact actions
  sections/                   Ten independently editable landing page sections
  forms/quote-form.tsx        Client-side consultation form
  i18n/                       Language context, toggle, translated text
lib/
  i18n/ta.ts                  Shared Tamil translation dictionary
  whatsapp.ts                 Enquiry message and URL construction
public/images/logo.png        Original logo extracted from embedded base64
```

The `(marketing)` route group does not change the public URL: the landing page remains `/`, with dedicated routes at `/services`, `/benefits`, `/subsidy`, `/projects`, and `/contact`. Every route renders the complete landing page and scrolls to its matching section. Next.js links update the pathname without hashes; direct visits, refreshes, and browser history also scroll to the matching section. Shared content lives in `components/sections/landing-page.tsx`. Add future marketing routes within this group to reuse the site shell.

Layouts and sections are Server Components. Interactive language controls, translated text, the current year, and the form use small Client Components. The language provider accepts server-rendered sections through `children`; it does not make every section a Client Component. Translation uses React state and persists the preference in local storage.

Edit section markup in `components/sections/`. Explicit English/Tamil pairs live beside their markup; repeated translations live in `lib/i18n/ta.ts`. Keep global design changes in `app/globals.css`. No raw HTML injection or inline scripts are used.

## Content and enquiry behavior

- The form opens WhatsApp to **+91 84284 20505** with an encoded message. Submissions are not stored on a server.
- The gallery retains the original sample Unsplash imagery and its sample-image notice.
- Subsidy figures and wording are retained from the supplied content; this architecture refactor does not verify or update them.
