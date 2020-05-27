import React from 'react';
import { usePrefixedTranslation } from 'hooks';
import { useStore } from 'store';
import { HeaderFive, HeaderFour, Pill, Small } from 'components/base';
import { styled } from 'components/theme';

const Styled = {
  Wrapper: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 240px;
  `,
  Description: styled(Small)`
    opacity: 0.5;
  `,
  Channels: styled.div`
    line-height: 40px;
  `,
};

interface Props {
  title: string;
  heading: string;
  description: string;
}

const StepSummary: React.FC<Props> = ({ title, heading, description }) => {
  const { l } = usePrefixedTranslation('cmps.loop.swap.StepSummary');
  const { buildSwapStore } = useStore();

  const { Wrapper, Description } = Styled;
  return (
    <Wrapper>
      <div>
        <HeaderFour>{title}</HeaderFour>
        <HeaderFive>{heading}</HeaderFive>
        <Description>{description}</Description>
      </div>
      <div>
        <Pill>{buildSwapStore.selectedChanIds.length}</Pill>
        {l('channelsSelected')}
      </div>
    </Wrapper>
  );
};

export default StepSummary;
