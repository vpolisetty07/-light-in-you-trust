# /images/ — Photography brief

The site currently ships with **editorial duotone placeholders** at the correct
dimensions. Each placeholder has a "Plate · No." caption mark in the corner so
the layout reads as intentional rather than empty. Replace each file with a real
photograph at the same dimensions and filename — no markup changes required.

## Tone

Dignified, quiet, documentary. Think Magnum / Tata Trusts annual report / Hermès
craft pages — never charity stock photography.

**Avoid:** crowds smiling at the camera, hands clasped in prayer, sunset over rice
fields, diyas, doves, child-silhouettes, big "thank you" signs, before/after.

**Lean toward:** a single subject, ambient light, neutral backgrounds, hands
doing real work, food being served, a doctor at a table, a child reading. B&W
or warm-saturated is fine; oversaturated colour is not.

## File manifest

| Path                            | Dimensions   | Where it appears                       | Suggested subject |
|---------------------------------|--------------|----------------------------------------|-------------------|
| `hero.jpg`                      | 1600 × 1200  | Hero, right column                     | An evening portrait of an elderly tiffin recipient, or hands holding a steel tiffin; warm light |
| `strip.jpg`                     | 2400 × 600   | Full-bleed parallax strip after Mission| Wide environmental shot of a medical camp — pharmacy table, queue, sign-in book |
| `program-medical.jpg`           | 800 × 1000   | Programs · row I                       | Stethoscope on a clinical table, OR a doctor speaking with a patient |
| `program-meals.jpg`             | 800 × 1000   | Programs · row II                      | Steel tiffins on a kitchen counter, OR a hand serving rice to a thali |
| `program-education.jpg`         | 800 × 1000   | Programs · row III                     | A school desk with open notebook + pen, OR a child reading |
| `portrait.jpg`                  | 900 × 1100   | Story aside                            | A single trustee, mid-shot, three-quarter pose, neutral background |
| `gallery-01.jpg`                | 1400 × 1000  | Gallery — large hero tile              | Establishing shot of the kitchen at dawn |
| `gallery-02.jpg`                | 800 × 1000   | Gallery                                | Mentor + student at a table |
| `gallery-03.jpg`                | 800 × 500    | Gallery                                | Eye-care equipment in use, or queue at camp |
| `gallery-04.jpg`                | 1100 × 800   | Gallery                                | Tiffin route — bicycle, route map, hands receiving |
| `gallery-05.jpg`                | 1100 × 800   | Gallery                                | Classroom — desks, blackboard, light through a window |

## Technical notes

- Save as **progressive JPEG**, 80–85 quality.
- Keep file sizes ≤ 250 KB where possible; the largest single image should be < 500 KB.
- The CSS already applies a gentle `filter: saturate(0.92)` to images for a unified
  editorial tone — you don't need to desaturate at source.
- Captions are rendered by the HTML (`<figcaption>`), not baked into images.

## On AI imagery

If you commission AI-generated photography, ask for:
- Documentary style, 35mm, soft natural light
- Indian subjects rendered with cultural specificity, not generic
- Negative prompts: candles, diyas, oil lamps, sunsets, hands-in-prayer, smiling
  crowds, sun rays, doves, halos, glow effects
