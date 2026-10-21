<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'

interface Skill {
  name: string
  icon: string
}

interface DomainGroup {
  id: 'backend' | 'ai' | 'frontend' | 'devops'
  title: string
  skills: Skill[]
}

// Stroke icons on a 24×24 grid
const icons: Record<string, string> = {
  code: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14',
  gauge: 'M4 18a8 8 0 1116 0M12 14l4-4',
  layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',
  database: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  card: 'M3 6h18v12H3zM3 10h18M7 15h3',
  swap: 'M4 8h15l-3-3M20 16H5l3 3',
  chat: 'M4 5h16v11H9l-5 4z',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4',
  book: 'M5 5a2 2 0 012-2h12v15H7a2 2 0 00-2 2zM5 20a2 2 0 002 1h12v-3',
  nodes: 'M4 12a2 2 0 104 0 2 2 0 10-4 0M16 6a2 2 0 104 0 2 2 0 10-4 0M16 18a2 2 0 104 0 2 2 0 10-4 0M8 11l8-4M8 13l8 4',
  cube: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9',
  type: 'M5 7V5h14v2M12 5v14M9 19h6',
  triangle: 'M12 4l9 16H3z',
  wave: 'M3 10c3-4 6-4 9 0s6 4 9 0M3 16c3-4 6-4 9 0s6 4 9 0',
  bolt: 'M13 3L4 14h7l-1 7 9-11h-7l1-7z',
  box: 'M4 8h16v11H4zM8 8V5h8v3M10 13h4',
  terminal: 'M4 5h16v14H4zM8 10l3 2-3 2M13 15h4',
  container: 'M3 12h18v3a5 5 0 01-5 5H8a5 5 0 01-5-5zM6 12V9h4v3M10 12V9h4v3M10 9V6h4v3',
  branch: 'M4 6a2 2 0 104 0 2 2 0 10-4 0M4 18a2 2 0 104 0 2 2 0 10-4 0M16 8a2 2 0 104 0 2 2 0 10-4 0M6 8v8M18 10c0 4-6 3-11 7',
  send: 'M4 12l16-8-6 16-2-7z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  loop: 'M4 12a8 8 0 0114-5.3L20 9M20 4v5h-5M20 12a8 8 0 01-14 5.3L4 15M4 20v-5h5',
}

const domains: DomainGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Python', icon: 'code' },
      { name: 'FastAPI', icon: 'gauge' },
      { name: 'Django & DRF', icon: 'layers' },
      { name: 'PostgreSQL', icon: 'database' },
      { name: 'Payments', icon: 'card' },
      { name: 'WebSockets & SSE', icon: 'swap' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Engineer',
    skills: [
      { name: 'LLM Integration', icon: 'chat' },
      { name: 'RAG Pipelines', icon: 'search' },
      { name: 'LlamaIndex', icon: 'book' },
      { name: 'Agentic AI', icon: 'nodes' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'Vue.js 3', icon: 'cube' },
      { name: 'TypeScript', icon: 'type' },
      { name: 'Next.js', icon: 'triangle' },
      { name: 'Tailwind CSS', icon: 'wave' },
      { name: 'Vite', icon: 'bolt' },
      { name: 'State Management', icon: 'box' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Linux Server Admin', icon: 'terminal' },
      { name: 'Docker & Compose', icon: 'container' },
      { name: 'Git & GitHub', icon: 'branch' },
      { name: 'Postman', icon: 'send' },
      { name: 'Nginx & SSL', icon: 'shield' },
      { name: 'CI/CD Automation', icon: 'loop' },
    ],
  },
]

const activeId = ref<DomainGroup['id']>('backend')
const active = computed(() => domains.find(d => d.id === activeId.value)!)

// Diagram geometry. Each layout has its own coordinate space, shared by its SVG and its tiles.
interface HubLayout {
  id: 'wide' | 'compact'
  class: string
  W: number
  H: number
  TILE: number
  HUB_R: number
  slots: Record<number, [number, number][]>
}

const layouts: HubLayout[] = [
  {
    // Tablet & desktop: tiles around the hub, as in the reference diagram
    id: 'wide',
    class: 'hidden md:block max-w-3xl',
    W: 1600,
    H: 900,
    TILE: 200,
    HUB_R: 175,
    slots: {
      4: [[470, 150], [1130, 150], [470, 750], [1130, 750]],
      6: [[470, 120], [1130, 120], [230, 450], [1370, 450], [470, 780], [1130, 780]],
    },
  },
  {
    // Mobile: same arrangement around the hub, in a square frame so tiles stay legible
    id: 'compact',
    class: 'md:hidden max-w-md',
    W: 1000,
    H: 1000,
    TILE: 230,
    HUB_R: 120,
    slots: {
      4: [[240, 180], [760, 180], [240, 820], [760, 820]],
      6: [[260, 170], [740, 170], [130, 500], [870, 500], [260, 830], [740, 830]],
    },
  },
]

const hexPoints = (layout: HubLayout, r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i
    return `${layout.W / 2 + r * Math.cos(a)},${layout.H / 2 + r * Math.sin(a)}`
  }).join(' ')

const buildNodes = (layout: HubLayout) => {
  const { W, H, TILE, HUB_R } = layout
  const CX = W / 2
  const CY = H / 2
  const slots = layout.slots[active.value.skills.length] ?? layout.slots[6]!
  return active.value.skills.map((skill, i) => {
    const [x, y] = slots[i] ?? [CX, CY]
    const dx = x - CX
    const dy = y - CY
    const len = Math.hypot(dx, dy)
    // Stop the connector just outside the hexagon and just outside the tile edge
    const tileReach = (TILE / 2) * (len / Math.max(Math.abs(dx), Math.abs(dy))) + 24
    return {
      ...skill,
      style: {
        left: `${((x - TILE / 2) / W) * 100}%`,
        top: `${((y - TILE / 2) / H) * 100}%`,
        width: `${(TILE / W) * 100}%`,
        height: `${(TILE / H) * 100}%`,
        // Entrance: stagger index + a small start offset pointing back toward the hub
        '--i': i,
        '--fx': `${(-dx / len) * 18}px`,
        '--fy': `${(-dy / len) * 18}px`,
      },
      line: {
        x1: CX + (dx / len) * (HUB_R + 24),
        y1: CY + (dy / len) * (HUB_R + 24),
        x2: x - (dx / len) * tileReach,
        y2: y - (dy / len) * tileReach,
      },
    }
  })
}

const diagrams = computed(() => layouts.map(layout => ({ layout, nodes: buildNodes(layout) })))
</script>

<template>
  <section id="skills" class="py-20 sm:py-28 border-t border-line">
    <div class="container-page">
      <SectionHeading
        index="02"
        label="Skills"
      />

      <!-- Category Tabs -->
      <div v-reveal class="flex flex-nowrap justify-between sm:justify-center gap-x-2 sm:gap-x-6 mb-10 sm:mb-14 border-b border-line" role="tablist">
        <button
          v-for="domain in domains"
          :key="domain.id"
          type="button"
          role="tab"
          :aria-selected="activeId === domain.id"
          class="relative -mb-px pb-3 whitespace-nowrap text-[11px] min-[400px]:text-xs sm:text-sm transition-colors border-b"
          :class="activeId === domain.id ? 'text-fg border-fg' : 'text-muted border-transparent hover:text-fg'"
          @click="activeId = domain.id"
        >
          {{ domain.title }}
        </button>
      </div>

      <!-- Scroll reveal lives on the static wrapper; tab switches only do a quick enter fade -->
      <div v-reveal="{ delay: 80 }">
      <Transition
        enter-active-class="transition-opacity duration-150 ease-out"
        enter-from-class="opacity-0"
      >
        <div :key="active.id">
          <!-- Hub Diagram: wide layout on tablet & desktop, tall layout on mobile -->
          <div
            v-for="{ layout, nodes } in diagrams"
            :key="layout.id"
            class="relative mx-auto text-fg"
            :class="layout.class"
            :style="{ aspectRatio: `${layout.W} / ${layout.H}` }"
          >
            <svg class="absolute inset-0 w-full h-full" :viewBox="`0 0 ${layout.W} ${layout.H}`" fill="none" aria-hidden="true">
              <defs>
                <marker :id="`skill-arrow-${layout.id}`" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse">
                  <path d="M1 1l8 4-8 4" fill="none" stroke="rgb(var(--subtle))" stroke-width="1.5" />
                </marker>
              </defs>

              <line
                v-for="(node, i) in nodes"
                :key="node.name"
                v-bind="node.line"
                class="hub-line"
                :style="{ '--i': i }"
                pathLength="1"
                stroke="rgb(var(--subtle))"
                stroke-width="2.5"
                :marker-start="`url(#skill-arrow-${layout.id})`"
                :marker-end="`url(#skill-arrow-${layout.id})`"
              />

              <!-- Double-outlined hexagon hub -->
              <g class="hub-core">
                <polygon :points="hexPoints(layout, layout.HUB_R)" fill="rgb(var(--surface))" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
                <polygon :points="hexPoints(layout, layout.HUB_R - 22)" stroke="currentColor" stroke-width="5" stroke-linejoin="round" />
              </g>
            </svg>

            <!-- Hub Label -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                class="text-center font-semibold uppercase tracking-wide leading-tight text-fg"
                :class="layout.id === 'wide' ? 'max-w-[14%] text-sm lg:text-base' : 'max-w-[18%] text-[10px]'"
              >
                {{ active.title }}
              </span>
            </div>

            <!-- Skill Tiles -->
            <div
              v-for="node in nodes"
              :key="node.name"
              class="hub-tile absolute flex flex-col items-center justify-center gap-1 md:gap-2 p-1 md:p-2 rounded-lg md:rounded-xl border-[1.5px] border-fg bg-surface text-fg transition-transform duration-200 hover:-translate-y-1"
              :style="node.style"
            >
              <svg class="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <path :d="icons[node.icon]" />
              </svg>
              <span class="text-[8px] min-[400px]:text-[9px] md:text-[10px] lg:text-[11px] font-medium uppercase tracking-normal md:tracking-wide text-center leading-tight">
                {{ node.name }}
              </span>
            </div>
          </div>
        </div>
      </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tab-switch entrance: hub settles, connectors draw out, tiles pop in staggered.
   Opacity/transform only; `backwards` fill so hover transforms work once finished. */
.hub-core {
  transform-box: fill-box;
  transform-origin: center;
  animation: hub-in 240ms cubic-bezier(0.16, 1, 0.3, 1) backwards;
}

.hub-line {
  stroke-dasharray: 1;
  animation: line-in 280ms ease-out backwards;
  animation-delay: calc(60ms + var(--i) * 35ms);
}

.hub-tile {
  animation: tile-in 300ms cubic-bezier(0.16, 1, 0.3, 1) backwards;
  animation-delay: calc(90ms + var(--i) * 35ms);
}

@keyframes hub-in {
  from { opacity: 0; transform: scale(0.92); }
}

@keyframes line-in {
  from { opacity: 0; stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
}

@keyframes tile-in {
  from { opacity: 0; transform: translate(var(--fx), var(--fy)) scale(0.92); }
}

@media (prefers-reduced-motion: reduce) {
  .hub-core,
  .hub-line,
  .hub-tile {
    animation: none;
  }
}
</style>
