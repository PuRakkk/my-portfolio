<script setup lang="ts">
interface Skill {
  name: string
  icon?: string
  image?: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: 'Python', image: 'python', level: 90, category: 'Backend' },
  { name: 'Django and DRF', image: 'django', level: 85, category: 'Backend' },
  { name: 'FastAPI', image: 'fastapi', level: 80, category: 'Backend' },
  { name: 'PostgreSQL, SQLModel, SQLAlchemy', image: 'postgresql', level: 80, category: 'Backend' },
  { name: 'HTML, CSS and JavaScript', icon: 'JS', level: 80, category: 'Frontend' },
  { name: 'Vue.js and Tailwind CSS', image: 'vue', level: 85, category: 'Frontend' },
  { name: 'Linux Server', image: 'linux', level: 80, category: 'DevOps' },
  { name: 'Git, GitHub, CI/CD', image: 'git', level: 85, category: 'DevOps' },
  { name: 'LLM Integration', icon: 'AI', level: 80, category: 'AI' },
]

const categories = ['Backend', 'Frontend', 'DevOps', 'AI']
</script>

<template>
  <section id="skills" class="py-20 lg:py-32 relative overflow-hidden">
    <!-- Dark Red & Gold Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0d0805]"></div>

    <!-- Animated Gradient Orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -left-40 w-[400px] h-[400px] bg-red-950/30 rounded-full blur-3xl animate-orb-float"></div>
      <div class="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-amber-900/20 rounded-full blur-3xl animate-orb-float-delayed"></div>
      <div class="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-gold-500/10 rounded-full blur-3xl animate-orb-pulse"></div>
    </div>

    <!-- Subtle vignette overlay -->
    <div class="absolute inset-0 bg-radial-vignette"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <p class="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">What I Know</p>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
        <div class="w-20 h-0.5 bg-gold-500 mx-auto mb-6"></div>
        <p class="text-gray-400 max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </div>

      <div class="space-y-12">
        <div v-for="category in categories" :key="category">
          <h3 class="text-xl font-semibold text-gold-400 mb-6 flex items-center">
            <span class="w-8 h-0.5 bg-gold-400/50 mr-3"></span>
            {{ category }}
          </h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="skill in skills.filter(s => s.category === category)"
              :key="skill.name"
              class="bg-dark-800 rounded-xl p-6 border border-dark-600 hover:border-gold-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div class="flex items-center mb-4">
                <div
                  v-if="skill.image === 'python'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3 flex-shrink-0"
                >
                  <img
                    src="@/assets/images/python.png"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'vue'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/vue.svg"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'typescript'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/ts.svg"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'tailwind'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/tailwind.webp"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'django'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/django.png"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'drf'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/django.png"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'fastapi'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/fastapi_logo.svg"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'postgresql'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/postgresql.png"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'postman'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/postman.svg"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'git'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/git.png"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <div
                  v-else-if="skill.image === 'linux'"
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3"
                >
                  <img
                    src="@/assets/images/linux.png"
                    :alt="skill.name"
                    class="w-6 h-6 object-contain"
                  />
                </div>
                <span
                  v-else
                  class="w-10 h-10 rounded-full bg-dark-700 border border-gold-400/20 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold text-gold-400"
                >
                  {{ skill.icon }}
                </span>
                <span class="text-white font-medium">{{ skill.name }}</span>
              </div>
              <div class="relative">
                <div class="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transition-all duration-1000"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
                <span class="absolute right-0 -top-6 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {{ skill.level }}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
