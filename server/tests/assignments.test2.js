import { test, expect } from 'vitest';

test('GET /api/assignments responde con estado 200 y un array', async () => {
  const res = await fetch('http://localhost:3000/api/assignments');
  
  expect(res.status).toBe(200);
  
  const data = await res.json();
  expect(Array.isArray(data)).toBe(true);
});