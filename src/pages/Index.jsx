import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CatBreed = ({ name, description }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds, known for their intelligence and playful personality." },
    { name: "Persian", description: "Recognized for their long fur and flat faces." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Characteristics of Cats</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Independent nature</li>
              <li>Excellent hunters</li>
              <li>Flexible and agile bodies</li>
              <li>Keen senses, especially hearing and night vision</li>
              <li>Variety of vocalizations (meow, purr, hiss)</li>
              <li>Grooming experts</li>
            </ul>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt="A cute cat"
              className="mx-auto object-cover rounded-lg shadow-md w-full h-64"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Popular Cat Breeds</h2>
        <div className="space-y-4">
          {catBreeds.map((breed) => (
            <CatBreed key={breed.name} name={breed.name} description={breed.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
