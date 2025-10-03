export default function Footer() {
    return (
        <footer className="w-full text-center py-4 mt-6 mb-5 text-xs text-gray-500 font-light flex flex-col items-center gap-1">
            <span className="flex items-center gap-1">
                Created by
                <a href="https://github.com/Aryanvaish" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors">
                    Aryan Vaish
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.2c-3.338.726-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.124-.303-.536-1.527.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.553 3.293-1.23 3.293-1.23.655 1.649.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
                    </svg>
                </a>
            </span>
            <span className="text-[10px] text-gray-400">
                © {new Date().getFullYear()} BMI Calculator
            </span>
        </footer>
    );
}
