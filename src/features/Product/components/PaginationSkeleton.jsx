import { Skeleton } from '@mui/material';

PaginationSkeleton.propTypes = {};

function PaginationSkeleton(props) {
    return <Skeleton variant="rounded" width="100%" height={30} sx={{ marginBottom: '1rem' }} />;
}

export default PaginationSkeleton;
