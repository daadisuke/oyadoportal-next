/**
 *
 * input selectのコンポーネントです。
 *
 * react-hook-formに完全依存。
 * useFormContextを使用します。
 *
 * @usage
 * import { RhfInputSelect } from '@/components/common/form/reactHookForm/RhfInputSelect'
 *
 * <RhfInputSelect
 *   control={control} //controlを渡すことでnameを補完します
 *   name='graduation_year'
 *   required='卒業年は必須項目です。'
 * >
 *   <option value=''>選択してください</option>
 *   {masterParams.common?.recruitment_group?.map(
 *     (item: any, index: number) => {
 *       return (
 *         <option key={index} value={item.value}>{item.name}</option>
 *       )
 *     }
 *   )}
 * </RhfInputSelect>
 *
 */

// reactの機能
import { useState, useEffect, Children } from 'react';
import type { ReactNode } from 'react';

// react-hook-form
import { useFormContext } from 'react-hook-form';
import type { UseControllerProps, FieldValues } from 'react-hook-form';

// style
import styles from './RhfInputSelect.module.scss';

//= ===========================各種インポートここまで

type Props<T extends FieldValues> = {
  name: string; // name属性
  className?: string; // カスタムclass名
  required?: any; // react-hook-formの機能
  validate?: any; // react-hook-formの機能
  onChange?: any; // react-hook-formの機能
  onBlur?: any; // react-hook-formの機能
  width?: 'original' | undefined; // セレクトボックスの幅 'original'本来の幅を適用する
  children?: ReactNode;
} & UseControllerProps<T>;

export const RhfInputSelect = <T extends FieldValues>({ ...props }: Props<T>) => {
  const { register } = useFormContext();

  return (
    <>
      <div
        className={[
          styles['input-select'],
          props.width ? styles['-width--' + props.width] : '',
          props.className ? props.className : '',
        ].join(' ')}
      >
        <select
          className={styles['input-select__operation']}
          {...register(props.name, {
            required: props.required,
            onChange: props.onChange,
            onBlur: props.onBlur,
            validate: props.validate,
          })}
        >
          {props.children}
        </select>
      </div>
    </>
  );
};

// export default InputSelect
