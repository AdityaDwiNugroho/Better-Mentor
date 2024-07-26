const ProfileCard = {
    data() {
        return {
            isDarkMode: false,
            stars: [],
            isHovering: false
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode
            if (this.isDarkMode) {
                this.createStars()
            } else {
                this.stars = []
            }
        },
        createStars() {
            this.stars = Array.from({ length: 100 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 3}s`
            }))
        },
        setHovering(isHovering) {
            this.isHovering = isHovering
        },
        goLink() {
            window.location.href='projects/'
        }
    },
    mounted() {
        if (this.isDarkMode) {
            this.createStars()
        }
    },
    template: `
        <div :class="['min-h-screen flex items-center justify-center p-4 transition-all duration-1000', isDarkMode ? 'bg-gradient-to-b from-gray-900 to-blue-900' : 'bg-gradient-to-r from-blue-400 to-purple-500']">
            <div v-if="isDarkMode" class="absolute inset-0 overflow-hidden">
                <div v-for="(star, index) in stars" :key="index" class="star" :style="{ 
                    left: star.left, 
                    top: star.top, 
                    width: star.size,
                    height: star.size,
                    animation: 'twinkle ' + star.animationDuration + ' infinite ' + star.animationDelay 
                }"></div>
            </div>
            <div 
                :class="['max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden transition-all duration-500', 
                    isDarkMode ? 'bg-gray-800' : 'bg-white',
                    {'transform hover:scale-105 hover:rotate-1': !isHovering}
                ]"
                @mouseenter="setHovering(true)"
                @mouseleave="setHovering(false)"
                :style="{
                    animation: isHovering ? 'float 3s ease-in-out infinite' : 'none',
                    boxShadow: isHovering ? (isDarkMode ? '0 0 50px rgba(255,255,255,0.1)' : '0 0 50px rgba(0,0,0,0.1)') : 'none'
                }"
            >
                <div class="relative">
                    <img src="./assets/img/cover.jpg" alt="Cover" class="w-full h-64 object-cover transition-transform duration-500" :class="{'transform scale-110': isHovering}" />
                    <div class="profile-img-container absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-48 h-48">
                        <img src="./assets/img/profile_cop.jpg" alt="Profile" class="profile-img w-full h-full object-cover rounded-full border-4 border-white" />
                    </div>
                </div>
                <div class="pt-28 pb-8 px-6 text-center">
                    <h2 :class="['text-3xl font-bold mb-2 transition-colors duration-500', isDarkMode ? 'text-white' : 'text-gray-800']">Aditya Dwi Nugroho</h2>
                    <p :class="['text-lg mb-4 transition-colors duration-500', isDarkMode ? 'text-gray-300' : 'text-gray-600']">Frontend Mentor</p>
                    <button @click='goLink' class="mt-4 px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                        <span class="relative z-10">View Project</span>
                        <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </button>
                </div>
            <div :class="['px-6 py-4 flex justify-center space-x-6 border-t transition-colors duration-500', isDarkMode ? 'border-gray-700' : 'border-gray-200']">
                <a href="https://x.com/ProgrammerADN" class="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
                <a href="https://github.com/AdityaDwiNugroho" :class="['transform hover:scale-110 transition-all duration-300', isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-gray-900']">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
            </div>
            </div>
            <button @click="toggleDarkMode" class="fixed top-4 right-4 w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-12" :class="isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'">
                <span v-if="isDarkMode">☀️</span>
                <span v-else>🌙</span>
            </button>
        </div>
    `
}

const app = Vue.createApp({
    components: {
        ProfileCard
    }
})

app.mount('#app')