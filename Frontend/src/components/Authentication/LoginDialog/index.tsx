import BaseDialog from "../../shared/BaseDialog";

export default function LoginDialog({ onClose }: { onClose: () => any }) {
  return (
    <>
      <BaseDialog onClose={onClose} content={<div>hello</div>}></BaseDialog>
    </>
  );
}
