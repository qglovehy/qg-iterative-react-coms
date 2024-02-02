import { FC } from 'react';
import { IConditionalRenderProps, IConditionalRenderShowProps } from './types';
declare const ConditionalRender: FC<IConditionalRenderProps> & {
    Show: FC<IConditionalRenderShowProps>;
};
export default ConditionalRender;
