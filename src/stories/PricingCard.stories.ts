import type { Meta, StoryObj } from '@storybook/angular';
import { PricingCardComponent, PricingPlan } from '../app/shared/components/pricing-card/pricing-card.component';

const starterPlan: PricingPlan = {
  name: 'Starter',
  price: 'from £499',
  note: 'A clean, fast brochure site for small businesses.',
  features: ['Up to 5 pages', 'Mobile responsive', 'SEO foundations', 'Handover session', 'Delivered in 7 days*'],
  cta: 'Get started',
};

const proPlan: PricingPlan = {
  name: 'Pro',
  price: 'from £899',
  note: 'A full e-commerce store, ready to sell from day one.',
  features: ['Unlimited products', 'Stripe payments', 'Inventory management', 'SEO foundations', 'Handover session', 'Delivered in 14 days*'],
  cta: 'Get started',
  popular: true,
};

const scalePlan: PricingPlan = {
  name: 'Scale',
  price: 'from £1,499',
  note: 'Performance-focused build for growing businesses.',
  features: ['Everything in Pro', 'Performance audit', 'Core Web Vitals pass', 'Analytics setup', 'Delivered in 21 days*'],
  cta: 'Get started',
};

const meta: Meta<PricingCardComponent> = {
  title: 'Containers/PricingCard',
  component: PricingCardComponent,
  tags: ['autodocs'],
  args: {
    plan: starterPlan,
  },
};
export default meta;

type Story = StoryObj<PricingCardComponent>;

export const Playground: Story = {};

export const Default: Story = {
  args: { plan: starterPlan },
};

export const Popular: Story = {
  args: { plan: proPlan },
};

export const ThreeTier: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; max-width: 960px">
        <srw-pricing-card [plan]="starter" />
        <srw-pricing-card [plan]="pro" />
        <srw-pricing-card [plan]="scale" />
      </div>
    `,
    props: {
      starter: starterPlan,
      pro: proPlan,
      scale: scalePlan,
    },
  }),
};
