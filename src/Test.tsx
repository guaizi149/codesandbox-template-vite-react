import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => ({
  unassign: {
    color: token.colorTextDisabled,
  },
}));

export default function Test() {
  const { styles } = useStyles();
  return <div className={styles.unassign}>未设定</div>;
}
