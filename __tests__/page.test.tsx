import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Page from '../app/page';

test('Page', () => {
  render(<Page />);

  expect(screen.getByRole('button', { name: 'Add' })).toBeDefined();
  expect(screen.getByRole('button', { name: 'All' })).toBeDefined();
  expect(screen.getByRole('button', { name: 'Active' })).toBeDefined();
  expect(screen.getByRole('button', { name: 'Completed' })).toBeDefined();
  expect(screen.getByRole('button', { name: 'Clear completed' })).toBeDefined();

  expect(screen.getByRole('checkbox', { name: 'Сделать верстку' })).toBeDefined();
  expect(screen.getByRole('checkbox', { name: 'Запрограммировать интерфейс' })).toBeDefined();
  expect(screen.getByRole('checkbox', { name: 'Написать тесты' })).toBeDefined();

  expect(screen.getByPlaceholderText('Enter new task')).toBeDefined();
});
