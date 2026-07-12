import { Navbar } from './components/Navbar.tsx';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <h1 className="text-3xl font-bold">Layout Test</h1>
                    <p className="mt-4">If the Navbar is above and the Footer is below, Step 5 is complete!</p>
                </div>
            </main>
        </div>
    );
}

export default App;