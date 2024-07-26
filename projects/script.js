const ViewProject = {
    data() {
      return {
        isDarkMode: false,
        stars: [],
        projects: [
          { name: "Interactive Rating", description: "Interactive rating with beatiful style!", url: "./interactive-rating/", backgroundImage: "interactive-rating/img/image.png" },
          { name: "Project 2", description: "lorem dulu pak", url: "#" },
          { name: "Project 3", description: "lorem dulu pak", url: "#" },
          { name: "Project 4", description: "lorem dulu pak", url: "#" },
        ],
        socialIcons: [
          { name: "Twitter", class: "fab fa-twitter", url: "https://x.com/ProgrammerADN" },
          { name: "GitHub", class: "fab fa-github", url: "https://github.com/AdityaDwiNugroho" },
        ]
      };
    },
    methods: {
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        if (this.isDarkMode && this.stars.length === 0) {
          this.createStars();
        }
      },
      createStars() {
        this.stars = Array.from({ length: 100 }, () => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 3 + 1}px`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 3}s`
        }));
      }
    },
    mounted() {
      if (this.isDarkMode) {
        this.createStars();
      }
    },
    template: `
      <div :class="{'bg-gradient-to-r from-blue-400 to-purple-500': !isDarkMode, 'bg-gray-900': isDarkMode}" class="min-h-screen transition-colors duration-500 relative">
        <div id="app" class="relative z-10">
          <div v-if="isDarkMode" class="stars-container">
            <div v-for="(star, index) in stars" :key="index" class="star" :style="{ 
              left: star.left, 
              top: star.top, 
              width: star.size,
              height: star.size,
              animation: 'twinkle ' + star.animationDuration + ' infinite ' + star.animationDelay 
            }"></div>
          </div>
          
          <div class="max-w-6xl mx-auto px-4 py-12 relative z-10">
            <button @click="toggleDarkMode" class="fixed top-4 right-4 w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-12" :class="isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'">
              <span v-if="isDarkMode">☀️</span>
              <span v-else>🌙</span>
            </button>
  
            <div class="text-center mb-16">
              <h1 :class="{'text-gray-900': !isDarkMode, 'text-white': isDarkMode}" class="text-5xl font-bold mb-2">Aditya Dwi Nugroho</h1>
              <p :class="{'text-gray-600': !isDarkMode, 'text-gray-400': isDarkMode}" class="text-xl">Frontend Mentor</p>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div v-for="(project, index) in projects" :key="index" 
                   :class="{'bg-white': !isDarkMode, 'bg-gray-800': isDarkMode}"
                   class="rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 float-animation">
                <div class="h-48 bg-cover bg-center" :style="{ backgroundImage: 'url(' + project.backgroundImage + ')' }"></div>
                <div class="p-6">
                  <h3 :class="{'text-gray-900': !isDarkMode, 'text-white': isDarkMode}" class="text-2xl font-semibold mb-2">{{ project.name }}</h3>
                  <p :class="{'text-gray-600': !isDarkMode, 'text-gray-400': isDarkMode}" class="mb-4">{{ project.description }}</p>
                  <a :href="project.url" class="inline-block px-6 py-3 rounded-full text-white font-semibold transition-colors duration-300 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">View Project</a>
                </div>
              </div>
            </div>
  
            <div class="flex justify-center space-x-6">
              <a v-for="icon in socialIcons" :key="icon.name" :href="icon.url" :class="{'text-gray-600 hover:text-gray-900': !isDarkMode, 'text-gray-400 hover:text-white': isDarkMode}" class="text-3xl transition-colors duration-300">
                <i :class="icon.class"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `
  };
  
  const app = Vue.createApp({
    components: {
      'view-project': ViewProject
    }
  });
  
  app.mount('#app');
  