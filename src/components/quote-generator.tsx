import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { BIZ_UDGothic } from 'next/font/google';
import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Container } from './ui/container';
import { Icons } from '@/lib/icons';

const fontGothic = BIZ_UDGothic({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
});

type QuoteResponse = {
  quote: string;
  author: string;
  category: string;
};

interface QuotesGeneratorProps {}

const QuotesGenerator: FC<QuotesGeneratorProps> = () => {
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['quote'],
    queryFn: async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'pnfmgqXw0ZI39RZBaizdoQ==g5mAl4619Jtsl8yS',
        },
      });

      if (response.ok && response.status === 200) {
        const result = await response.json();
        return result[0] as QuoteResponse;
      }

      return {
        quote: "Game's the game.",
        author: 'Harry W2S',
        category: 'fun',
      };
    },
  });

  return (
    <Container
      className={cn('min-h-[14rem] flex', {
        'flex-col justify-between': !isLoading && !isRefetching,
        'items-center justify-center': isLoading || isRefetching,
      })}
    >
      {isLoading || isRefetching ? (
        <div role="status">
          <Icons.spinner className="w-8 h-8 mr-2 text-slate-50 animate-spin fill-accent" />
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="space-y-8">
          <Button variant="link" size="default" onClick={() => refetch()}>
            <RefreshCw />
          </Button>
          <blockquote className="space-y-8">
            <p className={cn(fontGothic.className)}>{`"${data?.quote}"`}</p>
            <footer className="text-right">{`- ${data?.author}`}</footer>
          </blockquote>
        </div>
      )}
    </Container>
  );
};

export default QuotesGenerator;
