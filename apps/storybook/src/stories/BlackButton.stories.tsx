import type { Meta, StoryObj } from '@storybook/react';
import { BlackButton } from '@repo/ui/BlackButton';

const meta: Meta<typeof BlackButton> = {
  title: 'Components/BlackButton',
  component: BlackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlackButton>;

export const Default: Story = {
  args: {
    text: '다음',
    width: '335px',
    fontSize: '16px',
    isLoading: false,
  },
};

export const CustomWidth: Story = {
  args: {
    text: '다음',
    width: '154px',
    isLoading: false,
  },
};

export const CustomFontSize: Story = {
  args: {
    text: '다음',
    fontSize: '24px',
    isLoading: false,
  },
};

export const WithClickHandler: Story = {
  args: {
    text: '다음',
    isLoading: false,
    onClick: () => alert('버튼이 클릭되었습니다!'),
  },
};

export const WithLoading: Story = {
  args: {
    text: '다음',
    isLoading: true,
  },
};
