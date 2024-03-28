import { createSlice } from '@reduxjs/toolkit';

interface IPayloadProps {
  payload: any;
  type: string;
}

const value = {
  dict: null, //字典

  token: null,

  antdTheme: {
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 5,
    },
    components: {
      Button: {
        colorPrimary: '#1677ff',
        algorithm: true,
      },
      Input: {
        colorPrimary: '#1677ff',
      },
    },
  }, //antd主题
  projectTheme: {
    colorPrimary: '#1677ff',
    borderRadiusWidth: '4px',
  }, //自定义主题
  componentSize: 'middle', //组件尺寸
  direction: 'ltr', //组件位置
};

export const counter = createSlice({
  name: 'counter',
  initialState: { value },
  reducers: {
    //合并State
    onMergeState: (state: any, action: IPayloadProps) => {
      if (action.payload === undefined) return;

      Object.keys(action.payload)?.forEach((item) => {
        if (state.value[item] === void 0) {
          state.value[item] = action.payload[item];
        }
      });
    },

    //存储State
    onSetState: (state: any, action: IPayloadProps) => {
      if (action.payload === undefined) return;

      Object.keys(action.payload)?.forEach((item) => {
        state.value[item] = action.payload[item];
      });
    },

    //重置所有状态
    onResetState: (state: any) => {
      Object.keys(value).forEach((item) => {
        state.value[item] = value[item];
      });
    },

    //设置主题
    setAntdTheme: (state: any, action: IPayloadProps) => {
      const colorPrimary = action.payload?.colorPrimary;
      const borderRadius = action.payload?.borderRadius;
      const componentSize = action.payload?.componentSize;
      const direction = action.payload?.direction;

      if (colorPrimary) {
        state.value.antdTheme.token.colorPrimary = colorPrimary;
        state.value.antdTheme.components.Button.colorPrimary = colorPrimary;

        state.value.projectTheme.colorPrimary = colorPrimary;
      }

      if (borderRadius) {
        state.value.antdTheme.token.borderRadius = borderRadius;

        state.value.projectTheme.borderRadiusWidth = borderRadius + 'px';
      }

      if (componentSize) {
        state.value.componentSize = componentSize;
      }

      if (direction) {
        state.value.direction = direction;
      }
    },
  },
});

export const { onSetState, setAntdTheme, onResetState, onMergeState } = counter.actions;

export default counter.reducer;
