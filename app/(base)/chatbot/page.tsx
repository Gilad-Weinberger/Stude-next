"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface Item {
  _id: string;
  name: string;
  description: string;
}

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [form, setForm] = useState<{ name: string; description: string }>({
    name: "",
    description: "",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/items");
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
      const text = await res.text(); // Get the raw response text
      console.log("Response text:", text); // Check the response content
      const data = JSON.parse(text); // Try to parse it manually
      setItems(data.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      fetchItems();
      setForm({ name: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Item name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Item description"
          value={form.description}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
