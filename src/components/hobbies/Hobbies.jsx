export default function Hobbies() {
  const hobbies = ["Game Prototyping", "Automation with n8n", "Gym & Fitness"];
  return (
    <section>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
}