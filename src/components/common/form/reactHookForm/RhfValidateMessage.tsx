/**
 *
 * エラーメッセージを表示するコンポーネントです
 * react-hook-formを使用します。
 * useFormContextを使用します。
 *
 * @usage
 * import { RhfValidateMessage } from '@/components/common/form/reactHookForm/RhfValidateMessage'
 *
 * エラーメッセージを表示したい項目のnameを渡すだけ。
 * <RhfValidateMessage name='email' />
 *
 */

// reactの機能
import { useState } from 'react';

// react-hook-form
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message'; // エラーメッセージコンポーネント

// style
import styles from './RhfValidateMessage.module.scss';

//= ===========================各種インポートここまで

type Props = {
  name: string;
};

export const RhfValidateMessage: React.FC<Props> = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (message ? <p className={styles['form-RhfvalidateMessage']}>{message}</p> : null)}
      />
    </>
  );
};

// export default RhfValidateMessage
