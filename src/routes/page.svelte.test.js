import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
    test('should render h1', () => {
        const mockData = {
            posts: {
                data: {
                    posts: [
                        { title: 'Post 1', excerpt: 'Excerpt 1', featured_image: 'image1.jpg' },
                        { title: 'Post 2', excerpt: 'Excerpt 2', featured_image: 'image2.jpg' }
                    ]
                }
            }
        };

        render(Page, { data: mockData });
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
});
