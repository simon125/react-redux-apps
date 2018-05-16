import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import { Divider } from 'material-ui';

const styles = {
    parent: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: '99999',
        backgroundColor: 'white'
    },
    child: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

const LoadingIndicator = () => (
    <div style={styles.parent}>
        <CircularProgress size={80} thickness={5} style={styles.child} />
    </div>
)

export default LoadingIndicator