import { ElMessageBox, ElNotification} from "element-plus";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'

// 通知方法
export function notify(
    message: string, 
    type: 'success' | 'warning' | 'info' | 'error' = 'success', 
    dangerouslyUseHTMLString: boolean = false
): void {
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 2000
    })
}

//确认方法接口
interface ConfirmOptions {
    message: string;
    type: 'success' | 'warning' | 'info' | 'error';
    title?: string;
}
// 确认方法
export function confirm({message, type='warning', title='提示'}: ConfirmOptions): void {
    ElMessageBox.confirm(
        message,
        title,
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type
        }
    )
}

// nprogress 关闭右上角转轮
NProgress.configure({showSpinner: false})

// 打开nprogress
export function showFullLoading(){
    NProgress.start()
}

// 关闭nprogress
export function hideFullLoading(){
    NProgress.done()
}